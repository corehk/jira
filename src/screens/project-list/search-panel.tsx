import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token?: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel: React.FC<SearchPanelProps> = (props) => {
  const { param, setParam, users } = props;

  return (
    <form>
      <div>
        <input
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
          type="text"
          value={param.name}
        />
        <select
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
          value={param.personId}
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
