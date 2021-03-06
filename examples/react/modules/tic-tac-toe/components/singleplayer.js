/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import { Client } from 'boardgame.io/react';
import { AI } from 'boardgame.io/ai';
import TicTacToe from '../game';
import Board from './board';

const App = Client({
  game: TicTacToe,
  board: Board,
  ai: AI({
    // eslint-disable-next-line react/display-name
    renderGameTreeCell: state => {
      return (
        <div style={{ transform: 'scale(0.7)' }}>
          <Board {...state} isPreview={true} moves={{}} />
        </div>
      );
    },

    enumerate: G => {
      let r = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          r.push({ move: 'clickCell', args: [i] });
        }
      }
      return r;
    },
  }),
});

const Singleplayer = () => (
  <div style={{ padding: 50 }}>
    <h1>Singleplayer</h1>
    <App gameID="single" />
  </div>
);

export default Singleplayer;
