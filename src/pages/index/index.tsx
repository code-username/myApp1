import  React, {useState,useEffect} from "react";
import {Button,Range,Cell,Toast } from '@nutui/nutui-react-taro';

const App = () => {
    const [value0, SetValue0] = useState([30, 60])
    useEffect(() => {
console.log("value变化了",value0);

    }, [value0])
    
    const change = (value: number, name?: string) => {
        Toast.text(`当前值：${value}`)
        SetValue0(value)
    }
    const cellStyle = {
        padding: '40px 18px',
    }
    return (
    <>
        <Cell style={cellStyle}>
        <Range
            range
            modelValue={value0}
            onChange={(value) => {
                change(value)
            }}
        />
        </Cell>
        <Button onClick={()=>{SetValue0([0,20])}}>设为默认值</Button>
    </>
    )
};
export default App;
