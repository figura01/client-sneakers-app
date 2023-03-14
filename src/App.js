const App = () => {
  return (
    <div className="App bg-gray-300">
      <header>
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center p-4">
            <p>Header App</p>
          </div>
        </div>
      </header>
      <main className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-4">
          <h1 class="text-3xl font-bold underline">
            Content App
          </h1>
        </div>     
      </main>
      <footer>
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center p-4">
            <p>Footer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
