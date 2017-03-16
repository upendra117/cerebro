import { send } from 'lib/rpc/events'
import icon from '../icon.png'

const keyword = 'reload'
const title = 'Reload'
const subtitle = 'Reload Cerebro App'
const onSelect = () => {
  send('reload')
  location.reload()
}

/**
 * Plugin to reload Cerebro
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 */
const fn = ({ term, display }) => {
  const match = term.match(/^reload\s*/)

  if (match) {
    display({ icon, title, subtitle, onSelect })
  }
}

export default { keyword, fn }
