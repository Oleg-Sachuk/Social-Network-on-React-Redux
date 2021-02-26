export const UpdateObject = (items,itemId,objPropName,newPropsObj) => {
    items.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...newPropsObj}
        }
        return user
    })
}