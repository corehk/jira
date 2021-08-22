import React, { useEffect, useState, } from 'react';
import { cleanObject } from 'utils';
import * as qs from 'qs';
import { List, } from './list';
import { SearchPanel, } from './search-panel';

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScree = () => {

    const [users, setUsers,] = useState([]);
    const [list, setList,] = useState([]);
    const [param, setParam,] = useState({
        name: '',
        personId: '',
    });

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (response) => {
            if (response.ok) {
                setList(await response.json());
            }
        });
    }, [param,]);

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async (response) => {
            if (response.ok) {
                setUsers(await response.json());
            }
        });
    }, []);

    return (
        <div>
            <SearchPanel param={param}
                setParam={setParam}
                users={users}
            />
            <List list={list}
                users={users}
            />
        </div>
    );

};