import Footer from "containers/Footer"

export const TEST="test"

export default {
    getModal(type) {
        switch (type) {
            case TEST:
                return Footer
            default:
                return null

        }
    }
}
