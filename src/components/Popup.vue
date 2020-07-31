<template>
	<div>
		<v-dialog max-width="600px" v-model="dialog">
			<template v-slot:activator="{ on, attrs }">
				<v-btn text slot="activator" class="success" v-bind="attrs" v-on="on"
					>Add new project</v-btn
				>
			</template>
			<v-card>
				<v-card-title>
					<v-card-text>
						<v-form class="px-3" ref="form">
							<v-text-field
								label="Title"
								v-model="title"
								prepend-icon="mdi-folder"
								:rules="inputRules"
							></v-text-field>
							<v-textarea
								label="Information"
								v-model="content"
								:rules="inputRules"
								prepend-icon="mdi-pencil"
							></v-textarea>

							<v-menu>
								<template v-slot:activator="{ on }">
									<v-text-field
										:value="formattedDate"
										label="Due date"
										prepend-icon="mdi-calendar-month"
										v-on="on"
										:rules="inputRules"
									></v-text-field>
								</template>
								<v-date-picker v-model="due"></v-date-picker>
							</v-menu>
							<v-spacer></v-spacer>
							<v-btn
								text
								class="success mx-0 mt-3"
								@click="submit"
								:loading="loading"
								>Add project</v-btn
							>
						</v-form>
					</v-card-text>
				</v-card-title>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import format from 'date-fns/format';
import db from '@/firebase';

export default {
	data() {
		return {
			title: '',
			content: '',
			due: null,
			inputRules: [(v) => v.length >= 3 || 'Minimum length is 3 characters'],
			loading: false,
			dialog: false,
		};
	},
	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				this.loading = true;

				const project = {
					title: this.title,
					content: this.content,
					due: format(new Date(this.due), 'dd MMM yyyy'),
					person: 'The Net Ninja',
					status: 'ongoing',
				};

				db.collection('projects')
					.add(project)
					.then(() => {
						this.loading = false;
						this.dialog = false;
						this.$emit('projectAdded');
					});
			}
		},
	},
	computed: {
		formattedDate() {
			console.log(this.due);
			return this.due ? format(new Date(this.due), 'dd MMM yyyy') : '';
		},
	},
};
</script>
