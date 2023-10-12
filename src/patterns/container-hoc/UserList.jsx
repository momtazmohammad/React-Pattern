import User from "./User";

export const UserList = ({ isLoading, data }) => {    
    return (
      <>      
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <>
            {data?.map(({ id, name, age }) => (
              <User key={id} id={id} name={name} age={age} />
            ))}
          </>
        )}
      </>
    );
  };