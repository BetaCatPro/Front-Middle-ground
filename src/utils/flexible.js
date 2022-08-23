import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '../constants'

/**
 * 判断当前是否为移动设备
 */
export const isMobileTerminal = computed(() => {
    return document.documentElement.clientWidth < PC_DEVICE_WIDTH
})
