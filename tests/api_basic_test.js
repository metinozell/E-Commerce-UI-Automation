Feature('API Basic Tests');

Scenario('Sistemden kullanici listesi basariyla cekilebilmeli (GET 200)', ({ I }) => {
    I.sendGetRequest('/users/1');
    I.seeResponseCodeIs(200);
});