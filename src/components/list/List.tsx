import * as style from './styled'
interface Props {
    options: string[]
}
const List = ({ options }: Props) => {
    return (
        <style.List>
            {
                options.map((item, index) => {
                    return (
                        <>
                        {item}
                        </>
                    )
                })
            }
        </style.List>
    )
}

export default List;
