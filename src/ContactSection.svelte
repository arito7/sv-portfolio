<form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
	<input class="contact-form__input" type="text" name="name" required placeholder="Name" />
	<input class="contact-form__input" type="email" name="email" required placeholder="Email" />
	<input type="hidden" name="access_key" value="b7d864e2-0a79-4044-ab01-60c6c87ea2b0" />
	<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
	<textarea
		class="contact-form__input textarea"
		name="message"
		required
		placeholder="text"
		aria-multiline="true"
	></textarea>
	<button type="submit">
		<span> お問い合わせ </span>
		<img src="/images/arrow.svg" width="28px" alt="" />
	</button>
</form>

<style lang="scss">
	.contact-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 16px;
		margin: 0 auto;
		background-color: #fff;
		max-width: 50%;
		@media (max-width: 480px) {
			max-width: 100%;
		}
		&__input:focus {
			margin-top: 0;
			margin-bottom: 12px;
			border-width: 3px;
			border-color: #69e6e6;
		}
		&__input {
			border-radius: 2px;
			background-color: #e9e9e9;
			&::placeholder {
				color: #535353;
			}
		}

		textarea {
			height: 200px;
			resize: none;
		}
		button {
			display: flex;
			align-items: center;
			justify-items: center;
			transition: all 0.1s ease-in-out;
			margin: 0 auto;
			background-color: #69e6e6;
			padding: 8px 8px 8px 12px;
			color: rgb(61, 61, 61);
			&:hover {
			}
		}
	}
</style>
