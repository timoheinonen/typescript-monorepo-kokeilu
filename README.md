# Typescript monorepo kokeilu

1. shared-library/ npm install 
2. app/ npm install 
3. Yritä importoida shared-libraryn kamaa Idean kautta -> ei toimi
4. Projektin juuressa: tsc --build 
    --> kääntää shared-libraryn, app:in kääntö epäonnistuu import virheisiin
4. Kokeile importointia uusiksi
   --> toimii
5. Aja juuressa: tsc --build
6. Idea ymmärtää muutokset, tsc --build --watch toimii kokohomman yli 
