const LoginForm = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
}) => (
  <form class="login100-form validate-form" onSubmit={handleSubmit} >
		<span class="login100-form-title p-b-49">
			Login
		</span>
		<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
		  <span class="label-input100">Username</span>
			<input 
        class="input100" 
        type="text" 
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
			<span class="focus-input100" data-symbol="&#xf206;"></span>
		</div>
			<div class="wrap-input100 validate-input" data-validate="Password is required">
			  <span class="label-input100">Password</span>
				<input 
          class="input100" 
          type="password" 
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
				<span class="focus-input100" data-symbol="&#xf190;"></span>
			</div>
			<div class="container-login100-form-btn">
				<div class="wrap-login100-form-btn">
					<div class="login100-form-bgbtn"></div>
					<button class="login100-form-btn" disabled={!username || !password} >
						Login
					</button>
				</div>
			</div>
			<div class="flex-col-c p-t-155">
				<span class="txt1 p-b-17">
					No Account?
				</span>
        <a href="#" class="txt2">
					Sign Up
				</a>
			</div>
	</form>
);

export default LoginForm;
