import { UserContext } from './User';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

const ParentComponent = () => {
    const user = {
        name: "XYZ",
        age: 45
    };

    return (
        <UserContext.Provider value={user}>
            <div>
                <h1>Parent Component</h1>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        </UserContext.Provider>
    );
};

export default ParentComponent;