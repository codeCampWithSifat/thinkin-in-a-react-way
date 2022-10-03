export default function BoilingVerdict ({celcious = 0}) {
    if (celcious >= 100) {
        return <p>Water Would Boiled</p>
    } else {
        return <p>Water Would Not Boiled</p>
    }
}