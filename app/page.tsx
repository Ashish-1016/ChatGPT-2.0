export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div className="mx-5 my-5">
          <div className="flex flex-col items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              Explain something to me
            </p>
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              What is difference betweena a dog and a cat
            </p>
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              What is the color of the sun
            </p>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="flex flex-col items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              Explain something to me
            </p>
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              What is difference betweena a dog and a cat
            </p>
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              What is the color of the sun
            </p>
          </div>
        </div>
        <div className="mx-5 my-5">
          <div className="flex flex-col items-center justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>

            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              Explain something to me
            </p>
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              What is difference betweena a dog and a cat
            </p>
            <p className="p-4 bg-gray-700/50 rounded-lg max-w-[300px]">
              What is the color of the sun
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
