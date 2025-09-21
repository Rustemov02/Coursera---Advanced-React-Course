import { useContext } from "react";
import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
  const { name } = useUser();
  return (
    <p>
      Hello <span>{name}</span>
    </p>
  );
};

const Header = () => {
  const { name, email } = useUser();

  return (
    <header>
      <h2>Blog App - By {name}</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { name, email } = useUser();
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Header />
      <h2>What is lorem ipsum</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis
        maiores iste voluptatum quisquam voluptate consectetur, iure libero eum
        voluptatem. Molestias et voluptatum aliquam fugit dicta reprehenderit
        quod possimus ipsa enim a nostrum officia veritatis eligendi natus
        perspiciatis quasi ex, numquam esse quas repudiandae deserunt. Obcaecati
        voluptatibus tempora illum, dolore repudiandae, labore nam animi itaque
        quidem rem laudantium dolorem excepturi suscipit dolores voluptatum,
        earum dignissimos. Explicabo cumque recusandae quos possimus facilis
        voluptatum distinctio veniam, eligendi perspiciatis, modi doloribus
        labore magni eius saepe, molestias necessitatibus illum repellendus
        suscipit voluptatem nisi autem ipsum repudiandae. Placeat, nihil! Ad id
        distinctio sed sunt unde, et iste ut? Esse praesentium atque, rem earum
        blanditiis iure optio sed modi quibusdam neque architecto ex cumque
        veritatis! Amet.
      </p>

      <p>
        Written by {name} and his email is {email}
      </p>
    </div>
  );
};

const LearningContextApi = () => {
  return (
    <UserProvider>
      <Page />
    </UserProvider>
  );
};

export default LearningContextApi;
