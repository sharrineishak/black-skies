import { createContext, useContext, useReducer } from "react";
import { starterMembers } from "../../data/CrewData.json";

const CrewContext = createContext();

const initialState = {
  members: starterMembers,
};

// TODO add function to generate a random ID
// TODO add function to generate a random name with different surname formats
// TODO add function to generate a random set of attributes
// TODO add function to generate a select a random portrait based on ethnicity, gender
// TODO add function to generate a random crewmate from all of the above

function reducer(state, action) {
  switch (action.type) {
    case "addMember": // Pass in character object
      return { ...state, members: [...state.members, action.payload] };
    case "removeMember": // Pass in character ID to delete
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.payload),
      };
    case "updateMember":
      return {
        ...state,
        members: state.members.map((member) =>
          member.id === action.payload.id
            ? { ...member, ...action.payload }
            : member
        ),
      };
    default:
      throw new Error("Unknown action submitted");
  }
}

function useCrew() {
  const context = useContext(CrewContext);
  console.log(context);

  if (context === undefined)
    throw new Error("CrewContext was used outside of provider");

  return context;
}

function CrewProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { members } = state;

  function getMember(id) {
    return members.filter((member) => member.id === id);
  }

  return (
    <CrewContext.Provider value={{ members, getMember, dispatch }}>
      {children}
    </CrewContext.Provider>
  );
}

export { CrewProvider, useCrew };
