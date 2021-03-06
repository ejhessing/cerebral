import {convertObjectWithTemplates} from './utils'

function onChildRemovedFactory (path, signal, options = {}) {
  function onChildRemoved ({firebase, resolve}) {
    firebase.onChildRemoved(resolve.value(path), resolve.path(signal), convertObjectWithTemplates(options, resolve))
  }

  return onChildRemoved
}

export default onChildRemovedFactory
