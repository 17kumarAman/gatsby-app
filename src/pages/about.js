import React from 'react'
import Layout from '../components/layout'

function about() {
  return (
    <Layout>
    <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lorem vel enim fermentum convallis. Donec sit amet urna vel libero ultricies bibendum. Sed euismod lacus ac risus tincidunt, nec rhoncus velit finibus. Proin nec pretium odio. Integer eget leo id felis feugiat sollicitudin.
            </p>
            <p className="text-lg mb-4">
                Vestibulum vitae libero nec ligula tincidunt scelerisque. In vitae massa sit amet tortor fermentum bibendum sed nec libero. Fusce ac fermentum enim. Ut nec ultricies lorem. Integer commodo eros at felis elementum, a finibus est aliquet.
            </p>
            <p className="text-lg mb-4">
                Nullam vel nisi ac arcu lacinia pulvinar sit amet vel urna. Sed et justo vitae lacus dapibus commodo. Mauris luctus commodo ex, ut consectetur tortor vestibulum vel.
            </p>
        </div>
    </Layout>
  )
}

export default about
