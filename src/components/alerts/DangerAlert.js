export const DangerAlert = ({dangerMessage}) => {
    return (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
             role="alert">
            <span className="font-medium">Произошла ошибка! {dangerMessage.name}: {dangerMessage.message}</span>
            <br />
            <span>Повторите попытку.</span>
        </div>
    )
}