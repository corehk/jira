import React from "react";
import { User } from "screens/project-list/search-panel";

interface Project {
  id: string;
  name: string;
  pin: string;
  personId: string;
  organizationId: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List: React.FC<ListProps> = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
        <tbody>
          {list.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          ))}
        </tbody>
      </thead>
    </table>
  );
};
