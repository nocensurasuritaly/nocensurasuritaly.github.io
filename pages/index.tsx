import React from 'react';

const Index = () => (
  <div className="container">
    <div className="row mt-5">
      <div className="col-8 offset-2">
        <h1 className="display-1 text-center">
          No alla censura su r/italy
        </h1>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col">
        <p>
          Questo gruppo di utenti Reddit vuole denunciare la censura dilagante su r/italy.
          Il nostro obbiettivo è quello di spingere i moderatori della community Italiana più
          grande su Reddit a riconsiderare il loro modo di operare. Troppo spesso post in linea
          con il regolamento vengono rimossi
          {' '}
          <strong>senza valide giustificazioni</strong>
          {' '}
          e in
          molti casi il chiedere spiegazioni ha portato a ingiustificati
          {' '}
          <strong>ban permanenti</strong>
          .
        </p>
      </div>
      <div className="col">
        <p>
          Invitiamo i moderatori di r/italy ad aprire una
          {' '}
          <strong>discussione</strong>
          {' '}
          al riguardo e a prendere misure per contrastare questi fenomeni di censura.
          Contemporaneamente, in segno di protesta, invitiamo tutti gli utenti a
          {' '}
          <strong>lasciare</strong>
          {' '}
          quel subreddit e a postare in community più democratiche, come
          {' '}
          <a href="https://www.reddit.com/r/Italia/" target="_blank" rel="noreferrer">
            r/Italia
          </a>
          .
        </p>
      </div>
    </div>

    <div className="row mt-3 mb-3">
      <div className="col">
        <h2 className="display-4 text-center">
          Guarda
          {' '}
          <a href="https://www.reveddit.com/v/italy/?removal_status=all&removedby=mod" target="_blank" rel="noreferrer">
            qui
          </a>
          {' '}
          tutti i post censurati su r/italy
        </h2>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col">
        <p>
          Un moderatore è una persona che arbitra e presiede una discussione, al fine di
          agevolarla. Oggi su r/italy si verifica invece l&apos;opposto. Molti post vengono rimossi
          solamente perché potrebbero generare commenti
          {' '}
          <strong>degradanti</strong>
          . I moderatori, anziché svolgere il loro compito e moderare i comportamenti scorretti,
          preferiscono eliminare completamente le discussioni controverse.
        </p>
      </div>
      <div className="col">
        <p>
          Stiamo raccogliendo diverse segnalazioni di utenti che sono stati censurati e hanno
          provato a chiedere spiegazioni ai moderatori di r/italy. Molti utenti non hanno
          ricevuto risposta, altri invece hanno ricevuto risposte contrastanti con il
          regolamento. Tra questi, diversi sono stati
          {' '}
          <strong>bannati permanentemente</strong>
          {' '}
          per aver denunciato la censura.
        </p>
      </div>
    </div>

    <div className="row mt-3 mb-3">
      <div className="col text-center">
        <h2 className="display-4 mb-5">
          Vuoi parlare di censura? Vieni bannato
        </h2>
        <p>
          <img className="img-fluid img-thumbnail" alt="La censura su r/italy" src="/images/censura_su_ritaly.png" />
        </p>
      </div>
    </div>

    <div className="row mt-5 mb-5">
      <div className="col">
        <p>
          Se anche tu ritieni che questo comportamento sia
          {' '}
          <strong>inaccettabile</strong>
          , allora ti invitiamo a lasciare r/italy e a unirti a
          {' '}
          <a href="https://www.reddit.com/r/Italia/" target="_blank" rel="noreferrer">r/Italia</a>
          .
        </p>
      </div>
      <div className="col">
        <p>
          Se invece sei stato vittima di censura su r/italy o vuoi riportare un
          comportamento scorretto da parte dei moderatori,
          {' '}
          <a href="https://www.reddit.com/message/compose/?to=SolitaryGoat" target="_blank" rel="noreferrer">puoi inviarci la tua segnalazione</a>
          .
        </p>
      </div>
    </div>
  </div>
);

export default Index;
