const {prepareEnvironment} = require('@gmrchk/cli-testing-library');

const {expect} = require('chai');

describe('E2E Tests', () => {
  after(() => process.exit(0));

  afterEach(() => {
    if (lastExpected != '') {
      console.log(`    Program didn't match the expected "${lastExpected}"`);
      process.exit(1);
    }
  });

  it('should be able to vote when the election is opened and display results at the end', async () => {
    const {spawn, cleanup} = await prepareEnvironment();
    const {waitForText, writeText, pressKey, wait, getExitCode} = await spawn(
      'java',
      '-jar ./target/Urna.jar'
    );

    await expectText('(2) Entrar (TSE)', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('Insira seu usuário:', waitForText);
    await sendInput('cert', writeText, pressKey);

    await expectText('Insira sua senha:', waitForText);
    await sendInput('54321', writeText, pressKey);

    await expectText('(1) Iniciar sessão', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('(0) Sair', waitForText);
    await sendInput('0', writeText, pressKey);

    await expectText('(1) Entrar (Eleitor)', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Insira seu título de eleitor:', waitForText);
    await sendInput('123456789012', writeText, pressKey);

    await expectText('(1) Sim', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do candidato escolhido por você para President:',
      waitForText
    );
    await sendInput('123', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do 1º candidato escolhido por você para FederalDeputy:',
      waitForText
    );
    await sendInput('12345', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do 2º candidato escolhido por você para FederalDeputy:',
      waitForText
    );
    await sendInput('54321', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('(2) Entrar (TSE)', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('Insira seu usuário:', waitForText);
    await sendInput('cert', writeText, pressKey);

    await expectText('Insira sua senha:', waitForText);
    await sendInput('54321', writeText, pressKey);

    await expectText('(2) Finalizar sessão', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('(3) Mostrar resultados', waitForText);
    await sendInput('3', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('João do PDS1 com 100', waitForText);

    await expectText('(0) Sair', waitForText);
    await sendInput('0', writeText, pressKey);

    await expectText('(0) Fechar aplicação', waitForText);
    await sendInput('0', writeText, pressKey);

    await wait(100);
    const exitCode = await getExitCode();
    await cleanup();

    expect(exitCode).to.equal(0);
    lastExpected = '';
  });

  it('should be able to cast null votes', async () => {
    const {spawn, cleanup} = await prepareEnvironment();
    const {waitForText, writeText, pressKey, wait, getExitCode} = await spawn(
      'java',
      '-jar ./target/Urna.jar'
    );

    await expectText('(2) Entrar (TSE)', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('Insira seu usuário:', waitForText);
    await sendInput('cert', writeText, pressKey);

    await expectText('Insira sua senha:', waitForText);
    await sendInput('54321', writeText, pressKey);

    await expectText('(1) Iniciar sessão', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('(0) Sair', waitForText);
    await sendInput('0', writeText, pressKey);

    await expectText('(1) Entrar (Eleitor)', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Insira seu título de eleitor:', waitForText);
    await sendInput('123456789012', writeText, pressKey);

    await expectText('(1) Sim', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do candidato escolhido por você para President:',
      waitForText
    );
    await sendInput('00', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do 1º candidato escolhido por você para FederalDeputy:',
      waitForText
    );
    await sendInput('0000', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do 2º candidato escolhido por você para FederalDeputy:',
      waitForText
    );
    await sendInput('0000', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('(0) Fechar aplicação', waitForText);
    await sendInput('0', writeText, pressKey);

    await wait(200);
    const exitCode = await getExitCode();
    await cleanup();

    expect(exitCode).to.equal(0);
    lastExpected = '';
  });

  it('should be able to cast protest votes', async () => {
    const {spawn, cleanup} = await prepareEnvironment();
    const {waitForText, writeText, pressKey, wait, getExitCode} = await spawn(
      'java',
      '-jar ./target/Urna.jar'
    );

    await expectText('(2) Entrar (TSE)', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('Insira seu usuário:', waitForText);
    await sendInput('cert', writeText, pressKey);

    await expectText('Insira sua senha:', waitForText);
    await sendInput('54321', writeText, pressKey);

    await expectText('(1) Iniciar sessão', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('(0) Sair', waitForText);
    await sendInput('0', writeText, pressKey);

    await expectText('(1) Entrar (Eleitor)', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Insira seu título de eleitor:', waitForText);
    await sendInput('123456789012', writeText, pressKey);

    await expectText('(1) Sim', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do candidato escolhido por você para President:',
      waitForText
    );
    await sendInput('br', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do 1º candidato escolhido por você para FederalDeputy:',
      waitForText
    );
    await sendInput('br', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do 2º candidato escolhido por você para FederalDeputy:',
      waitForText
    );
    await sendInput('br', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('(0) Fechar aplicação', waitForText);
    await sendInput('0', writeText, pressKey);

    await wait(100);
    const exitCode = await getExitCode();
    await cleanup();

    expect(exitCode).to.equal(0);
    lastExpected = '';
  });

  it('should be able to add and remove candidates', async () => {
    const {spawn, cleanup} = await prepareEnvironment();
    const {waitForText, writeText, pressKey, wait, getExitCode} = await spawn(
      'java',
      '-jar ./target/Urna.jar'
    );

    await expectText('(2) Entrar (TSE)', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('Insira seu usuário:', waitForText);
    await sendInput('emp', writeText, pressKey);

    await expectText('Insira sua senha:', waitForText);
    await sendInput('12345', writeText, pressKey);

    await expectText('(1) Cadastrar candidato', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('(1) Presidente', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Qual o nome do candidato?', waitForText);
    await sendInput('Manoel', writeText, pressKey);

    await expectText('Qual o numero do candidato?', waitForText);
    await sendInput('99', writeText, pressKey);

    await expectText('Qual o partido do candidato?', waitForText);
    await sendInput('Partido2', writeText, pressKey);

    await expectText(
      'Cadastrar o candidato a presidente Manoel Nº 99 do Partido2?',
      waitForText
    );
    await sendInput('1', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('(2) Remover candidato', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('(1) Presidente', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Qual o numero do candidato', waitForText);
    await sendInput('99', writeText, pressKey);

    await expectText(
      'Remover o candidato a presidente Manoel Nº 99 do Partido2?',
      waitForText
    );
    await sendInput('1', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('(0) Sair', waitForText);
    await sendInput('0', writeText, pressKey);

    await expectText('(0) Fechar aplicação', waitForText);
    await sendInput('0', writeText, pressKey);

    await wait(100);
    const exitCode = await getExitCode();
    await cleanup();

    expect(exitCode).to.equal(0);
    lastExpected = '';
  });

  it('should be able to add candidate and vote for them', async () => {
    const {spawn, cleanup} = await prepareEnvironment();
    const {waitForText, writeText, pressKey, wait, getExitCode} = await spawn(
      'java',
      '-jar ./target/Urna.jar'
    );

    await expectText('(2) Entrar (TSE)', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('Insira seu usuário:', waitForText);
    await sendInput('emp', writeText, pressKey);

    await expectText('Insira sua senha:', waitForText);
    await sendInput('12345', writeText, pressKey);

    await expectText('(1) Cadastrar candidato', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('(1) Presidente', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Qual o nome do candidato?', waitForText);
    await sendInput('Manoel', writeText, pressKey);

    await expectText('Qual o numero do candidato?', waitForText);
    await sendInput('99', writeText, pressKey);

    await expectText('Qual o partido do candidato?', waitForText);
    await sendInput('Partido2', writeText, pressKey);

    await expectText(
      'Cadastrar o candidato a presidente Manoel Nº 99 do Partido2?',
      waitForText
    );
    await sendInput('1', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('(0) Sair', waitForText);
    await sendInput('0', writeText, pressKey);

    await expectText('(2) Entrar (TSE)', waitForText);
    await sendInput('2', writeText, pressKey);

    await expectText('Insira seu usuário:', waitForText);
    await sendInput('cert', writeText, pressKey);

    await expectText('Insira sua senha:', waitForText);
    await sendInput('54321', writeText, pressKey);

    await expectText('(1) Iniciar sessão', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Insira a senha da urna', waitForText);
    await sendInput('password', writeText, pressKey);

    await expectText('(0) Sair', waitForText);
    await sendInput('0', writeText, pressKey);

    await expectText('(1) Entrar (Eleitor)', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('Insira seu título de eleitor:', waitForText);
    await sendInput('123456789012', writeText, pressKey);

    await expectText('(1) Sim', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do candidato escolhido por você para President:',
      waitForText
    );
    await sendInput('99', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do 1º candidato escolhido por você para FederalDeputy:',
      waitForText
    );
    await sendInput('br', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText(
      'Digite o número do 2º candidato escolhido por você para FederalDeputy:',
      waitForText
    );
    await sendInput('br', writeText, pressKey);

    await expectText('(1) Confirmar', waitForText);
    await sendInput('1', writeText, pressKey);

    await expectText('(0) Fechar aplicação', waitForText);
    await sendInput('0', writeText, pressKey);

    await wait(100);
    const exitCode = await getExitCode();
    await cleanup();

    expect(exitCode).to.equal(0);
    lastExpected = '';
  });
});

async function expectText(text, cb) {
  const originalText = text;
  text = text.replace(/[À-úº]/g, '�');
  lastExpected = originalText;

  const possibilities = [cb(originalText), cb(text)];

  return Promise.race(possibilities);
}

async function sendInput(input, writeCb, pressKeyCb) {
  await writeCb(input);
  await pressKeyCb('enter');
}
