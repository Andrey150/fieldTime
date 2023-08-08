import {Text, TouchableOpacity, View} from "react-native";
import tw from "../../libs/tailwind";
import {IBaseComponent} from "../base";

interface IComponent extends IBaseComponent {
    children?: any
    onPress?: () => void
}

function createComponent(style: string) {
    return function (props: IComponent) {
        if (props.visible === false) return null
        const _style = tw`${style} ${props.class ? props.class : ""}`
        const children = typeof props.children === 'string' ? <Text>{props.children}</Text> : props.children
        if (props.onPress) return <TouchableOpacity style={_style} onPress={props.onPress} onLayout={props.onLayout}>
            {children}
        </TouchableOpacity>
        return <View style={_style} onLayout={props.onLayout}>{children}</View>
    }
}

export const Row = createComponent('flex-row')
export const Row1 = createComponent('flex-row flex-1')
export const Row2 = createComponent('flex-row flex-2')
export const Row3 = createComponent('flex-row flex-3')
export const Row4 = createComponent('flex-row flex-4')
export const Row5 = createComponent('flex-row flex-5')
export const Row6 = createComponent('flex-row flex-6')
export const Col = createComponent('')
export const Col1 = createComponent('flex-1')
export const Col2 = createComponent('flex-2')
export const Col3 = createComponent('flex-3')
export const Col4 = createComponent('flex-4')
export const Col5 = createComponent('flex-5')
export const Col6 = createComponent('flex-6')
export const Blank = createComponent('border bg-white p-4 rounded-lg border-disable')
