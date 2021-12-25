/**
 * Return Custom Form Input Element
 * 
 * **Properties**
 * 
 * *type* -> **Can null**:
 * - No border (Default)
 * - full
 * - underline
 * 
 * *formType* -> **Can null**:
 * - text (Default)
 * - email
 * - password
 * - date
 * - select
 * 
 * *name* -> **Can null**: Form name Property
 * 
 * *id* -> **Can null**: Form id Property
 * 
 * *placeholder* -> **Can null**: Form placeholder Property
 * 
 * *pattern* -> **Can null**: Form pattern Property
 * 
 * **Returns**
 * 
 * - Input Element <input> - Full Border
 * - Input Element <input> - Underline Border
 * 
 * 
 * @param {Object} props 
 */
export default function Form(props) {
    switch (props.type) {
        case 'full':
            switch (props.formType) {
                case 'email':
                    return (
                        <input type="email" name={props.name} className="form form_full" id={props.id} placeholder={props.placeholder} />
                    )
                case 'password':
                    return (
                        <input type="password" name={props.name} className="form form_full" id={props.id} placeholder={props.placeholder} />
                    )
                case 'date':
                    return (
                        <input type="date" name={props.name} className="form form_full" id={props.id} />
                    )
                case 'select':
                    return (
                        <select name={props.name} id={props.id} className="form form_full">{props.children}</select>
                    )
                default:
                    return (
                        <input type="text" name={props.name} className="form form_full" id={props.id} placeholder={props.placeholder} pattern={props.pattern} maxLength={props.maxLength} autoComplete={props.autoComplete} />
                    )
            }
        case 'underline':
            switch (props.formType) {
                case 'email':
                    return (
                        <input type="email" name={props.name} className="form form_underline" id={props.id} placeholder={props.placeholder} />
                    )
                case 'password':
                    return (
                        <input type="password" name={props.name} className="form form_underline" id={props.id} placeholder={props.placeholder} />
                    )
                case 'date':
                    return (
                        <input type="date" name={props.name} className="form form_underline" id={props.id} />
                    )
                case 'select':
                    return (
                        <select name={props.name} id={props.id} className="form form_underline">{props.children}</select>
                    )
                default:
                    return (
                        <input type="text" name={props.name} className="form form_underline" id={props.id} placeholder={props.placeholder} pattern={props.pattern} maxLength={props.maxLength} autoComplete={props.autoComplete} />
                    )
            }
        default:
            switch (props.formType) {
                case 'email':
                    return (
                        <input type="email" name={props.name} className="form" id={props.id} placeholder={props.placeholder} />
                    )
                case 'password':
                    return (
                        <input type="password" name={props.name} className="form" id={props.id} placeholder={props.placeholder} />
                    )
                case 'date':
                    return (
                        <input type="date" name={props.name} className="form" id={props.id} />
                    )
                case 'select':
                    return (
                        <select name={props.name} id={props.id} className="form">{props.children}</select>
                    )
                default:
                    return (
                        <input type="text" name={props.name} className="form" id={props.id} placeholder={props.placeholder} pattern={props.pattern} maxLength={props.maxLength} autoComplete={props.autoComplete} />
                    )
            }
    }
}