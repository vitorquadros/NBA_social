import { InputWrapper } from './InputWrapper';

export default function TeamSelect({ register }: any) {
  return (
    <InputWrapper>
      <label htmlFor="team">Time preferido</label>
      <select id="team" placeholder="Time" {...register('team')}>
        <option value="0">Nenhum</option>
        <option value="atlanta">Atlanta Hawks</option>
        <option value="boston">Boston Celtics</option>
        <option value="brooklyn">Brooklyn Nets</option>
        <option value="chicago">Chicago Bulls</option>
        <option value="cleveland">Cleveland Cavaliers</option>
        <option value="charlotte">Charlotte Hornets</option>
        <option value="detroit">Detroit Pistons</option>
        <option value="denver">Denver Nuggets</option>
        <option value="dallas">Dallas Mavericks</option>
        <option value="golden_state">Golden State Warriors</option>
        <option value="houston">Houston Rockets</option>
        <option value="indiana">Indiana Pacers</option>
        <option value="los_angeles_clippers">Los Angeles Clippers</option>
        <option value="los_angeles_lakers">Los Angeles Lakers</option>
        <option value="miami">Miami Heat</option>
        <option value="milwaukee">Milwaukee Bucks</option>
        <option value="minnesota">Minnesota Timberwolves</option>
        <option value="memphis">Memphis Grizzlies</option>
        <option value="new_york">New York Knicks</option>
        <option value="new_orleans">New Orleans Pelicans</option>
        <option value="orlando">Orlando Magic</option>
        <option value="oklahoma_city">Oklahoma City Thunder</option>
        <option value="philadelphia">Philadelphia 76ers</option>
        <option value="phoenix">Phoenix Suns</option>
        <option value="portland">Portland Trail Blazers</option>
        <option value="sacramento">Sacramento Kings</option>
        <option value="toronto">Toronto Raptors</option>
        <option value="utah">Utah Jazz</option>
        <option value="san_antonio">San Antonio Spurs</option>
        <option value="washington">Washington Wizards</option>
      </select>
    </InputWrapper>
  );
}
