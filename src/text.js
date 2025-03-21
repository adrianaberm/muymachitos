varForm
.concat('<tr><td><label class="parameterClass">')
.concat(i18n:evalWithResource(showKey, 'Messages.properties'))
.concat('</label><input name="')
.concat(readOnly=="TRUE"?"":inputName)
.concat('" id="')
.concat(inputName)
.concat('" type="')
.concat(representationType)
.concat('" value="')
.concat(textMessageValue)
.concat('" ')
.concat(' regex="')
.concat('" size="60" >')


i18n:evalWithResource("PhoneNumber","CreateTicketMessages.properties")


i18n:evalWithResource("motiveTechnicalService","CreateTicketMessages.properties")


i18n:evalWithResource("Product","CreateTicketMessages.properties")
