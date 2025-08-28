export interface AccessLevel {
  id: number
  name: string
  level: number
  permissions: string[]
}

export interface OrganizationNode {
  id: string | number
  name: string
  title: string
  accessLevel: AccessLevel
  children?: OrganizationNode[]
}

export interface OrganizationChartData {
  root: OrganizationNode
  accessLevels: AccessLevel[]
}