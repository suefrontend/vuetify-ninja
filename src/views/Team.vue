<template>
	<div class="team">
		<h1 class="subheading grey--text">Team</h1>

		<v-container class="my-5">
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
					<v-card flat class="text-center ma-3">
						<v-responsive class="pt-4">
							<v-avatar size="100" class="grey lighten-2">
								<img :src="person.avatar" />
							</v-avatar>
						</v-responsive>
						<v-card-text>
							<div class="subheading">{{ person.name }}</div>
							<div class="grey--text">{{ person.role }}</div>
						</v-card-text>
						<v-card-actions>
							<v-btn text color="grey">
								<v-icon small left>mdi-message</v-icon>
								<span>Message</span>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	data() {
		return {
			team: [
				{
					name: 'The Net Ninja',
					role: 'Designer',
					avatar: './avatar-1.png',
				},
				{
					name: 'Sue Yamakawa',
					role: 'Web developer',
					avatar: './avatar-2.png',
				},
				{
					name: 'Michael Smith',
					role: 'Social media maverick',
					avatar: './avatar-3.png',
				},
				{
					name: 'Ryoko Watanabe',
					role: 'Web developer',
					avatar: './avatar-4.png',
				},
				{
					name: 'Jiyoung Kim',
					role: 'Sales guru',
					avatar: './avatar-5.png',
				},
			],
		};
	},
};
</script>
