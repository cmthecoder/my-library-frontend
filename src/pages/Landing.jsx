import libary from '../assets/pexel1.jpg'

const Landing = () => {
  const handleSignInWithGoogle = () => {
    // Handle sign in with Google logic here
  };

  const handleSignUpWithGoogle = () => {
    // Handle sign up with Google logic here
  };

  return (
    <div
      className="bg-cover bg-center bg-opacity-75"
      style={{ backgroundImage: `url(${libary})` }}
    >
      <div className="bg-overlay flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-2xl mb-4 text-center">Welcome Friend</h1>
          <button
            className="w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleSignInWithGoogle}
          >
            Sign in with Google
          </button>
          <button
            className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
            onClick={handleSignUpWithGoogle}
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing