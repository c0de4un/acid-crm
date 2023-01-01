export const EProjectStates = {
    DRAFT: 0,
    PLANNING: 1,
    DEVELOPMENT: 2,
    ACCEPTING: 3,
    CLOSED: 4
}

export const ProjectStateLabels = new Map<number, string>([
  [0, 'Draft'],
  [1, 'Planning'],
  [2, 'Development'],
  [3, 'Accepting'],
  [4, 'Closed']
])
