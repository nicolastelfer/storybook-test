import React, { Fragment } from "react";
import styles from "./style.scss";

// Constants
import Links from "../Links.json";

const List = () => (
  <Fragment>
    <style jsx>{styles}</style>
    {/*{ <style jsx>{`*/}
      {/*ul {*/}
        {/*background: hotpink;*/}

        {/*li {*/}
          {/*padding: 20px;*/}
          {/*border: 10px solid dodgerblue;*/}
        {/*}*/}
      {/*}*/}
    {/*`}</style> }*/}
    <ul>
      {Links.map(logo => (
        <a
          href={logo.HREF}
          title={logo.TITLE}
          key={logo.KEY}
        >
          <li>
            {logo.TITLE}
          </li>
        </a>
      ))}
    </ul>
  </Fragment>
);

export default List;
