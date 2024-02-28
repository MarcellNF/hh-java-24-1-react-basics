import './App.css'
import HelloWorld from "./components/HelloWorld.tsx";

export default function App() {
    const usernames = ["Hans", "Harry", "Hermione", "Brigitte"];
    const cats = [{name: "cat1", id: "1"}, {name: "cat2", id: "2"}, {name: "cat3", id: "4"}, undefined];
    cats.filter(cat => cat !== undefined);

    const helloWorldComponent = usernames.map(username => {
        const randomCat = cats[Math.floor(Math.random() * cats.length)];
        return <HelloWorld username={username} cat={randomCat} />;
    })

    return (
        <div>
            {helloWorldComponent}
        </div>
    );
}
