export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Menuboard</h1>
          <nav>
            <ul>
            <li>
                <a href={`/home`}>Home</a>
              </li>
              <li>
                <a href={`/recipes`}>Recipes</a>
              </li>
              <li>
                <a href={`/plan`}>Plan</a>
              </li>
              <li>
                <a href={`/groceries`}>Grocery</a>
              </li>
              <li>
                <a href={`/insights`}>Insights</a>
              </li>
              <li>
                <a href={`/preferences`}>Preferences</a>
              </li>
              <li>
                <a href={`/login`}>Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }