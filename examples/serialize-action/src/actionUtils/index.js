const TYPE_KEY = '$$type';

export function serialize(namespacedActions, action) {
  const namespaceKeys = Object.keys(namespacedActions)

  for (let i = 0; i < namespaceKeys.length; i += 1) {
    const namespaceKey = namespaceKeys[i]
    const namespace = namespacedActions[namespaceKey]
    const actionKeys = Object.keys(namespace)

    for (let j = 0; j < actionKeys.length; j += 1) {
      const actionKey = actionKeys[j]
      const namespacedAction = namespace[actionKey]

      if (namespacedAction === action.constructor) {
        const actionWithTypeMeta = {
          ...action,
          [TYPE_KEY]: `${namespaceKey}.${actionKey}`
        }

        return JSON.stringify(actionWithTypeMeta)
      }
    }
  }

  throw new Error(`Unable to serialize action ${action.name}.`)
}

export function deserialize(namespacedActions, action) {
  const parsedAction = JSON.parse(action)
  const [namespaceKey, actionKey] = parsedAction[TYPE_KEY].split('.')
  const emptyAction = new namespacedActions[namespaceKey][actionKey]()

  Object
    .keys(parsedAction)
    .filter(key => key !== TYPE_KEY)
    .forEach(key => emptyAction[key] = parsedAction[key])

  return emptyAction
}
