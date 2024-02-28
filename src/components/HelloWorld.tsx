import './HelloWorld.css';
import {Cat} from "../types/types.ts";


type HelloWorldProps = {
    username: string,
    cat?: Cat,
}

export default function HelloWorld(props: Readonly<HelloWorldProps>) {
    return (
        <div className="hello-world-wrapper">
            <h1>Hello {props.username}</h1>
            <p>
                {
                    props.cat ?
                        <>{props.cat.name}</> :
                        <>{props.username} hat keine Katze</>
                }
            </p>
        </div>
);
}