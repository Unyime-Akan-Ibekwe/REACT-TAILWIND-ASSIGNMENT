import Header from './Header';
import GreetingCard from './GreetingCard';


/*export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold underline text-blue-500">
      Hello world!
    </h1>
    </div>
    


  )
}*/

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center p-5">
        <GreetingCard
          title="Happy Birthday"
          message="We wish you a joyful day, it's all about you"
        />

        <GreetingCard
          title="Thank You"
          message="Thanks a lot for coming, you are appreciated"
        />

        <GreetingCard
          title="Congratulations!"
          message="You've given it your all"
        />
      </main>
    </div>
  );
};

export default App;
