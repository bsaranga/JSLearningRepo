const React = require('react')
const Link = require('react-router-dom').Link

module.exports = function Home() {
    return (
        <div>
            <Link className="bg-blue-100" to="/users">Users</Link>
            <Link className="bg-red-100" to="/signup">Sign up</Link>
            <h1 className="px-2 py-10">Hello World, from Reacsdfsdft HOT Disabled</h1>
            <p>Donec fermentum varius ex, ut pretium lorem aliquet et. Aenean a urna posuere mi mollis hendrerit. Duis porttitor tristique diam at tempus. Morbi auctor placerat iaculis. Fusce at orci mauris. Suspendisse malesuada velit lectus, posuere pellentesque nisl iaculis sit amet. Nullam volutpat eleifend enim, eu feugiat risus. Mauris faucibus tortor a tortor scelerisque, vitae ultrices diam tempor. Nullam tellus massa, dapibus non nisi id, molestie commodo nibh. Pellentesque vitae tincidunt orci, eget facilisis nulla.</p>
        </div>
    )
}