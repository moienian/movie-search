import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img src="./images/moviedb_logo.svg" alt="app logo" width="50" />
            </td>
            <td width="8"></td>
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
