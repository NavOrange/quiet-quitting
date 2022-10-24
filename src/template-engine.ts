interface TemplateEngine {
  (template: string, data: Record<string, unknown>): string
}

export const templateEngine: TemplateEngine = (template, data) => {
  if (!template) return ''
  if (!data) return template

  const reg = /\$\{([^}]+)?\}/g
  let match: RegExpExecArray

  while ((match = reg.exec(template))) {
    const value = match[1]
      .trim()
      .split('.')
      .reduce((target, key) => {
        const _target = target[key]
        if (_target === undefined)
          throw Error(
            `can't access '${match[1]}' in\n${JSON.stringify(data, null, 2)}`
          )
        return _target
      }, data)

    template = template.replace(
      match[0],
      typeof value === 'string' ? value : String(value)
    )
  }

  return template
}
