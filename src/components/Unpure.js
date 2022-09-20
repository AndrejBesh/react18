export const Unpure = ({ number }) => {
    const result = number + Math.random() * 100
    console.log('UNPURE')

    return (
        <div>
            <p>result : {result}</p>
        </div>
    )
}