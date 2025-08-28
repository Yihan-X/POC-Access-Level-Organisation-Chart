declare module 'vue3-org-chart' {
  import { Plugin } from 'vue'

  export interface OrgChartNode {
    id: string | number
    name: string
    title?: string
    children?: OrgChartNode[]
    [key: string]: any
  }

  export interface OrgChartProps {
    data: OrgChartNode
    horizontal?: boolean
    collapsable?: boolean
    expandAll?: boolean
    nodeWidth?: number
    nodeHeight?: number
    nodePaddingX?: number
    nodePaddingY?: number
    columnWidth?: number
    borderRadius?: number
    pathColor?: string
    pathWidth?: number
    nodeColor?: string
    nodeTextColor?: string
    toggleSiblingsResp?: boolean
    zoomable?: boolean
  }

  export const Vue3OrgChartPlugin: Plugin
  export const Vue3OrgChart: any
}