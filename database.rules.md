# Cheat sheet

1. Pozwól tylko autorowi `root.child('data_object').child('el').child($elKey).child('author').val() == auth.uid`
2. Pozwól tylko użytkownikom offical `root.child(account_type).child(auth.uid).val() == 'official'`

3. Pozwól autorowi lub użytkownikom offical `(root.child(account_type).child(auth.uid).val() == 'official') || (root.child('data_object').child('el').child($elKey).child('author').val() == auth.uid)`
