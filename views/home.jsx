const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
            <div>
                <img src="/images/Magical-Castle.jpg" alt="Its a castle!" />
            </div>
            <div>
                Photo by <a href="https://unsplash.com/photos/oBmPqzGii6E">Prometheus Design</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
            </div>
          </main>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
      </Def>
    )
  }
  

module.exports = home