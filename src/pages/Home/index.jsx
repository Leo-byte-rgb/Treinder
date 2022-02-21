import styles from "./styles.module.scss";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import img from "../../assets/hero.png";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h3>Trainder</h3>
        <ol>
          <li>Personais</li>
          <li>Nutricionistas</li>
          <li>Contato</li>
          <li onClick={() => navigate("/user-signup")}>
            Registre-se como aluno
          </li>
          <li onClick={() => navigate("/trainer-signup")}>
            Registre-se como professor
          </li>
        </ol>
      </header>
      <section className={styles.hero}>
        <h1>Acesse uma vida mais saudável.</h1>
        <p>
          A partir do momento que você estiver agachando com 180kg, os seus
          braços e ombros irão seguir o mesmo caminho em busca de equilíbrio. Se
          você quer braços e ombros grandes, sua primeira prioridade é ter
          certeza que suas pernas, quadril e costas tem estrutura suficiente.
        </p>
        <Button
          text="Começar"
          type="button"
          onClick={() => navigate("/login")}
        />
      </section>
      <div className={styles.card}>
        <b>Profissionais</b>
        <ul>
          <li>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="infos">
              <b>Paulo Muzy </b> <span>Personal Trainer</span>
            </div>
          </li>
          <li>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYZGRgZGhwaGhkcGhoaGBwaHBwaHBoaGRocIS4lHCErIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQkJSs0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND80NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAIHAf/EAD4QAAIBAgQDBgQFAQcDBQAAAAECEQADBAUSITFBUQYiYXGBkRMyscFCUqHR8OEHFCNicoLxFTOyFmNzkqL/xAAaAQACAwEBAAAAAAAAAAAAAAADBAABAgUG/8QAKBEAAgICAgEEAQQDAAAAAAAAAAECEQMhEjEEIjJBUWETQnGBFCPB/9oADAMBAAIRAxEAPwDmqHamGVXofjswI9waWWjU9loNUWdF7LPqsAdCRTb4dV3sPclLi9GB9xVnIob7LRoFqVBWqLUoFZNEiV69apWzVCiMioLqUQRWugkwKpui0r0Kr1maBuYMHlVjWykwZY+wqRsOp/As0N54oMvHk0VuzhgKYWrdG3cGD8oAPTl/SokQgwaJGaktGJY5R0zw29q0+DsaMUbV6qbEkGAJgcT0A8zA9algytZjhVQqXVnLmEtp87xxJP4VHM1I+QuV2X4c/gtwpH+q587H1rL2avrYh1UiVXdNhtIHhIqRM6u8dU8uAI/SqlyfQWPFdoqOa9jrsllLmfzkk+5r3stfe3cfDYkTb0Fgr76WkAFCeEyeHSui5PinvhgwUKo3Y7CentvQuJTDPbcOUkxoLAySp20xuRJI/wB1ZWWV0zbjBq1pinAYC1dMWoY8dPPyHWj0ylfy/pTLG9nBaRntTrXSwAjgFGsCPxatUeUVHgMU15DcYyQYJ57jYmi2LkCZWv5RUn/Sk/KKPQVKBUsgpOUJ0FRvlCdBTzRWjJUshXnyhOlaDs/q3VR6kD60+e3W12VHlQ8mRx6C4sak9lYu9mX5IT5QfpSbNcgvqJ0NHip+tdDsYhzRC4yONYWd/KCy8b6OF3FdTBWDW1vBu5EiBXaMTbs3dnto/mBPoRvSPG9l1O+Hn/Qx/wDE/vRo54vQGWCUVZS8Pl46UxsZeOlHDBlTDAgjiDxoyxYolgugfD5cOlMbOAXpU9m1R1q3WbLILWDXpRH91HSirduptFVZDgFqiLZ3qILB9aItJPAT5UUyW7sNd79xeqg+21XIVReyVt0xMMrKGQ8QQOo3q90N9mkegV7Xgr2ayWSIaxjXgrwmoUezUeLxRtBTyZgp8Adh9aItptqPDl4mqx2jzH8IPOfY0DJK9IZww+WWIXF1CpbeIG+9c6xOau43c7dNj040MMcxOzuI33McKFwY1yR1C3eSTuJO0T0oa8O8Y4Vz/AWLztrL6QxmSxmJ4wKvtlNKqs6oA73XxomOPGQDO7iTKKWY+w+JufAR2S2gDXWQ95i2oC3P4e7uf9QpmDVQ7SX1s6wLhR3c3JBO8wBMA8gB6UeV1oBjS5bLJZ7P4S2IFpNuJYSfc1s+UYZuNq2PEDSfORFVTs4MTc1s7nQBAZpOo9F5+tV3McRdVzqZtiQdzy40uk3KrHXSjdHQr2XPaVhhrrBWENbeLinaDBbcGPGqzjreI062AKLsdKkOkGdUT3h1HHao8vzNQqlbhniPmE+/H0Jq14DFC6nePe57H1nl61rk4mOEZA9jtIVwloI8XEffmCh+JBBOzDcVJk+KZbugwUuqX24ax3vTjwqtZthfg3NaAlD3nQchzZOniOdG5JiwbyEGVbgfOZP6kUZO1aE5xcXTL0iVMqihlc1Kr1ZglitGFeFq0LVCGpMb0DfxO0Hmf0pf2oxN5FBT5PxN0PQ9POqXd7RPO7EEDTGmgSi5SG8TSiPu0+cOAi2uZ8uG8z0oLDZ9ceJPvSizm8qUUap6qPqd6hwzFeO8nh59Kviq6NuZdreYlACTOrZR1PKnaOdP+aOPIVzvE2blvQzggNuo/foau2S4zUgLfNQ5QrZIzT0FY+1q743jusfoaHS3TZLQII4zxoFrZUkUbFK1TFcsadm1taJtioUFEJRQZOtTaqgSt5qiHCMwTRddejnhw40wyrFW7S62OpzqUoZEKRs0jj5UFm//AHCfzBW9xQbrO/SiRdop9nX+xmOsPYLue8o0szbwANgOlMsQ6MQUELAg8J8fWuUdku0DYe7GhXR4BSYE8jv0rqhzFbiqO6sDgGBPvWZJlowVlZXqISYFYbRaVmwqdLMbv6D96lVFTxbryHlQeJvml55viIzjw/LIsyxYCneqNibhZySIFWXF2yd2O1VzGP8AEfSvyjbzNDiMNGuTZZ8Z+YRd2P0UedPMb2aRjKHR/lIkenOmeV4MWraoOPFj1Y8f29KLpqMVQlPLLlaKy/Z64AAtxduW4286f4C0yIqu2ojn9hUteg1rikypZJSVMkoPOcrsOqtc3AjXsN+emTw9KLml2NCNbZLhIXjt80g90r5Heh5G9BcCTbbN7ma2GKorBSB3V2CxyAqO/k1q9LHZucc/Oqgcpt3GLawDPdLTIjgNquWCTRbUatTKNz1oUo8XaY7F2qZphMktJGpiY4A6Y/QUdotqO4B6UtxeIPWg1xMc6y9kqMT3OMMXjRE8DPADrSbLMKMPiLa6y6u8HaFVtvl589/6U9wOKBclu8ANxxnw+tb5VhrkD4g7qPrQkCYOoATxMBv0okJNOgc8cZRcmWENUimh1atw1MHNJya0LVrrrUvUIeuQQQwBB2IPCqfnfZbU4awFg8VYwB5Hp4VbGetS1VRqMmuirYPsko3uPv8AlQQPc704w2WWre6IJ/Md29zRrNUZapRHJsX51ghctMvMd5Tzkfvw9ar+T40gwTAg7egq3zVNxNkpfbpqn/ad4/WpJFxZe8rxQIA+tE4nDyJHp+1JMqdtAPTarFYcMsGhN07RtK9C5DUyGtsVZgzyqFWosXasC406CFapJodXrfVVkON5+ia0a2QU0wCPClqn6UzzjLjZVFJncmfOlicRW8ftop9mYZNLhuhH1q+vm6kaStvh+UTVHcbmtsxPfnqqn9KtqyF6yvEprCkO2owNLEEE9KueHsC2ulSxncljJ8p6Vz3+zvAS74hvwd1J/MdyfQfWr4+KEeNJ5perihzBDXJm12770vv34nesdyf3oC8J4mlxlAWYYh22oXLHt27gN1goG6+Lf0pmuGU7mq7n+AdnGngF296NhScqBZ24xLpbzSy3C4h9YolbqngwPkRXLDgLgrBaurwJpzic+zqTV4prmiY/Erwdvc0Vb7Q4lfxT5gGpRLOizVdze1eL/wCGQIWJLaY3PA+1AL2mvL8yo3oR9KnTFNiFOmFJmROw/k0PIqVh8Mti69bx094q3hrEHyBAmiMFfvhgHSFJ34EelBYfKMSHPeBHUkxHhNG4hnTZjP0oUmnpDVrsLxd48AaGSSeP8NLMRijOxr3D4szuaiizLlbGa4n4QBAJ7wmOkNz/AJwpzg85R7jox/7YA1E7sT3iAPDrSLAPrIYjUAZIPA0rze8EvOdMaoPd8ABJHLhW4RTe+weXJJR4rosmY9pisi2vqaUf+pMQSDrHHhFK3xaHnWWdJOzCmOIpZ07CXi6Kx5gGpCaSdnsYXRgxHdgDyim2rxobLNmNaNXhavCahD01rXk15UIemleY4cF1n8W089v+aZSKhxAB0nowNVLo1HsnwGE0qPy01tmBt6edBrdEbmTx/YVstwchJ50vYzSDLd7UIYdfboaEdYMcqjS4wYhj1O/jRN4BhI6USLpgZK0Rqa31VCrDrSPNM2CXCs8AKNQIr/bSxCK3iR96pitv610XtfamwT0YVzhuNB8PKsmOy8keMqCro39K9xSE6CPyx7V5cPDyphgrIdBPLamjJfuzFnRhLajYxqPm29bYgNUOs20Qcgigj0FGWG1gaT/PGudPts6UKUUhdcxTr8u/hvUQ1vuUPvT9rQXnJ6AVvYw4Y94R61iza0IrNl32RGP09ztROIyrEkDQqTz1EekRVoTSBAECtwakZOLtFTSkqZQ7+BxS/OiD3j3oR7F/8ie5rozmgLmUI5kNpHMRPt0pmOdP3CksDXtOfXMPe/InvQtyzd/InvXUsNl9lPwBj1bf9OAqa5g7DiDaT0EH9K1/kL6KWCRzG9Y+1aqLiKTbE9Rzjwq6Zl2ftmTbJU/lJlT68RSdbJSQRBFbU4yRhxlBlRu57cEjcfof1oO7mjvEkmrpneCV0QlQTp4x0PP3qn330MV0xBqJL6Ncm1tnttXbw4URbtgHjLH2qJCxEmeHD96Z4bCgAMeO30qUXY3wFuEj1jyqt5wD/eHB8I8oqz4Jvp9KC7V4AhUugbEaG8Oa/cVmDqVEn6oWVZxvXtrjXjmstGmWLFgybtFYtJodDqkyw5701t9qcIeOoehrnWIQl4G56CibGTYlxKWLp8kb9qw6LXI6TZz7Btvq/Q0YmZYU/K6zy3rmQweJtL37FwDqUYfrFQpj2LAAQZHmKqkyddnZBZQ8h71uuDT8tcvwb3b1zRb1u7HcAmfMngB41b8F2SxY3fFG31VdTx6kgVh1Htmoxcuiyf3NPyiocfaGggAUMmSYtCCuLDx+F0gHwJU7Vr2ixr2LQYoGl1VzvCg8W24R41nkpdGlFxewGze38+fpTAXNI4SP138aVX2C8+c1lzHg7AnYQdudYoNY2NwEGIP1j0onDX9oPj6jypBbxIH33ozD3N/A7zz9aj0RbE+coyMwViIO2/Kq5d3MkknrVw7QqNAcwB8pP0+9UvFXBq2O0UxB2haaplzz23qw7rzUfSuXXV7xrrmPwzhHDlWDodLDgYFcqx6w48QKR8KP6cpQ/ITK7SZh+UU4yAEyo3O0UlQ92jMtxTISVJBjlXQBI6QEVwA50sOI616ltFPd/SqPjO0tx9IdidOw4cPTjTDI8y1uFLcetKzxNbHMeZPTL3hBz4+dFMwjxpJYuuW7vDlTe0CQCw3pehizVrhFbrfrx1njURt9KhQQMT1FaYjFhRPKQPevUtA1j4RCDP8ASqrZdhCPIrV7kVsTAoZpYwNyeAFV8mktbMxDahtxpR/06+7FfhmRwYwB7njVtwGXae83zfTy8fH2obNcVDfDTYR3zJkk8BPGm4Q4LkxWcub4xKzneCNuysupKmCF3AkHi3DlXP8AGjU/Lbf+njXTMyw2tNMnYbAmR59Z86oub5aytIEjw5HxokZpgnjlEV29U7mOW3SneFGwihcoyx3ZmI2XrwJPL2qzYPJSTvJJiAOZ+9RzijSxyezfK7M96JFPLeB+KpRkLq+xA/m3nTvK+ziIAbneaNkB7o8+bH9Kix+OYOUtnSi7Qu0kceHjQpLj6mbg+XpiUzNf7M3VWdL6DmEfZvLWNj7UBk/Ylp1Yh4H5EMk+bcvSryCTuTPnW4t1mWdtUjcfHjHctgmX5XZsiLdtV8Ylj5sdzRV1zyqLEkqNqAuYsrJdtuQoKbbsJKKqkSvj2Bg8N+e+3Wg1wuGxLS+HXY/OywfPUIrRLushgO71+woxm1CBAA5etEU66AyxhuV5dYw6kWUC6jLNxY782O58qLe+J8qRHFQJBmOPnWWcd3Qebb/z0qNMipaQ5a6PelOLsO7xrhYIM7z4EcCDWr4pnOhBuOdSOjAA89vT+b1UdMkqoVXssYseEct+AqCzg1UnXBMbdKMx91gvXyEVW2zLvSRw2oitmU0g7EAA7mTy/nOtsJjDwFL7l7WI4dKJwODhpJ8f5/OVXetkUXy0NcaouYe4jDip9CBIPuK5w+0DwFdPZUWy5nfQT7CuYYod70ouB3YPyY1R0RsaWfSdhwZeUnafCudZuAHgfhLKfQ1Z8XmyO4dQUZoJB+TUOjePjVYz1Yvv4kN71iGNxyW/oFKXpoFtHiKIwiamVZiZE0LaO9T4e4VII4g00YMI3qW2+nvzuvCoZlj1mvHOxFVVkui4dmc7EEE79OlW+zmQPOuMYe+UYMp3H61acDmhYSCep8KWy4adobx5rVM6E2MBFDtjQOdVi1jyec1494ngaDwDcyx3M6VdjRdrGqyyrTG9US/ePA86nyh3VxpPdOxHhUcNFctl/S5I2qw5bl2gS3zHj4eApR2Yw2rvkbLsP9XX0+9WlaLhxfuYPNlfSPGQAFjsACT6VTHUsxc8WJJ9TMfarbmQJtOq8WUgfce1Vgpygg8+tTO3pGvFS2wR7M8a0fLk50wCVJZwbue6pPjy9+FLK29DUnFLYtTCqoAUVZslyooNb/ORsPyj96nwGWKneaGf9F8up8aOZ6axYq9UhPNntcY9HumN+gJ9qpkTv13q2XW7r/6W+lVINVeR8GvFXbJVrdrwFD/EAobE4gRxpVIYkybEY0UPhsEjElzrPj8voPClCsSxJ/gom3jgNpolfQPkWAWkiAKX47YwsjyHOobeZLwnephigRx35n71UVTsqTtAbYV2MTE7HYcOG8c9qIXA6SoHBdv02oyRHCIOxP8ANqja8DqAI24njxrdtmKoyykDh/z615exIEzuOE+XP61HceUkHqPOqrjsQ6tIPzE907gxz+lWo2ZboPx+JCyJPhO0dONV7ENrO5gnjAn2oe9jW3n24j06UC+InhsQZosYmJMd4bCtI3Gn0B+ta4nHaJAakbYhzuWINaa5YA1OFsv9SkNFzB2UgkwdqR4xu+ab2hSbFnvGjQiktC85OTtjnC5lbu7MFt3DtEf4b+f5TW/aPVdtrdhQUAtsJGoBflJHMeNI8ZlroA2kgESB4eB51BaxjRpJ2M/8VcZKS0UzwCIPX7VdcB2Ie5ZW58QK795UI2jlJ61TGXZP9NXbNcxvrYw1yyzgKm8A6QRETypXypZFSxtK38m8aW2yv/8AQsTqYqhgEgNI5dJrS7k+IC962Z6iN6tyB7ttLhY94A7GBPPaobquNtTUzFulfZhpFIbLrg4o3tR2SuyP3lMHYyDwNPb2sczUNhGZgCdudabspaMx9koNaAlecbxRGGsXHQOo1KRsQRXmPx4Ft9AMfID1NN8kRUtIF4RPqeNDlBBI5JITYnLrziAh9Y/erT2eynTbVmHejf71hNPsNHdUeH6caFkVUkGxybtssOAshEVByEnzO5+tEq1BWHJAnpU/xIphKlQBu2EXH2/n8FAvZ17MJ6N+IfuKl1TW9smajin2RNraBbeFUGFXUerfsOFHIp4SfE/t0FY8Lw4mtEuRVKKXRbk5dhExtUTmvNdeBpqzJ4dwR1BFUu7cgVbzcAPGqPmbaXcdGYexNLeQuhrxpVYFjcdE70nfMmNR41yxovKctLsCw2oaSSCuVsJRHKTG5pfiLTq3nV4t4MAARQOa5brQxxG4qkymiom4UINGrim2IPl+1J8eWWQRuPtU+DxCsnpRGgf4HVrGbA/eDPnWPnA3B28Z4z/xVfuuFEAkwI8/OgrtyIjhM1pRsrlQ+xOedwAcdx/Q0pxWMLKA3Ecjv6ilz3DJ5j69KkbDNp1t8pPr7cq2ofQNyIHubfeoGfpR7YEsJVhty50J8LeOPlRFFApSbJsEE3+IG4baYH1p0vZ5NIvayi8e/Fb9n8mUupuRpiSDsaM7ThL4CWGPcEFeVWYsrS5iiP8ALqAPoaU4vEAuxiJMxTW9krqmpyAenGq/fHePhtV1ZDpmQol7DBHE6ZA6jyPKqRmGFAdtvlYqT61cOxxgXEPFWpHnuFIuXzyDqfVq5PjScc8o3rsamrimIsdeDMsCNKqvsKvfZDHXXtadClE21ExPhHOud3/mbzq6ZNjWTAM1r5lcTtOximfNjyxJVttA8bpj7E4+3JT5IJ7sRHpQT4hOTCqz2qulzZvSQblsEx+YGDVfOJdeDmmMEf8AWrMTdMvV5x1obEXNCFubd0VUUxT/AJ6Z5fiHuEa2kJuBRqozdjt8KHwwEwU34fM3T9aV5HnD2ZD7pMEc18qtAeLaxEN3oqnPhWe42ldQ170LFLlbZbVHQMPiFdQyGQasGVHUZ8PrtVUwGGS2sIIncjlNWvs/3lPnH1NVJXJBISpMf29ZHdCAHhqLaiOsDgKxLhLMj6dSgN3TsVaQDB3G6kRSy7lb3He6l/4e/wANWUMSqW5DAkOBBbUeE7Ch8mLpbbEu6uH0/wCJcf4baF2Ed0iJ1EcztRDBYkO9FomxiJpPh8cXVH+GwDqCo1IGO2owGIJ2/wCKKTHJLAllKfPKk6JE94iQNt5moQ2LEHettW1eXHQnZ1nmNQ2HjWl+8qlVAZiQTCjVsIBJjlJFQhIxoe7dI4GvHx1vbvgSARPd2MgTPDgePSor+42/pUIR4hyrjod6rGcW5uuOpn3ANWTEGURum1LMww83A3VQftQsy9NhsLqQgs5TJk06wNgLRaKK1vbUo5DVBPxRUd5xFL7uKil+JzGOdRIgo7QousxzqsYdCHkEhZ3AE8TGwpzmuK1tS11bQ2idUzI22HjTEI2LzlQ+7T5Nas2UvW3diYkMsbUF2VyhMWW1uU08BEk0sTFO6Mr3mJ5IxkUXlmZXLelZ+GY4xxo3GkL8mB5vb+Bea2ratB2MRNW/Bdibl1A63VOoAxBgHnSSxouXgXl2YgSBI3NdWxuLGHwwCCDAA8zVN0V2U5+wTII162J4LtHnSPtT2cbBBHVxLHfnFdUS/wDDw+ri5WSfE1z7GucS+i8JAMisqTI0Isqw2JxQItxKH5piaBxOKu4dyjBQVMMOvrV6wuDTCNNsfNymqr2mwSNcNzVu28A862pWSjXEZdiWQ3GRtBEzxiqgRufM10xc7IwZQhvljc+Fc2Tn5mtJlUXzI10Yu+nWG96k7R4caL55nS3/ANYon4GjGzye39D/AFrM2TUbi/8AtGvPxyVlU18pDko+mvycwxoh2q4dgmeXBQvaIAcDeJ4GOdVLMB3/AEH0pv2czu5hpZIM7EH+eNdjyISyYGoq2LQajLY07ffCBtLaEBAREERJmN6pqrJA6nnV8zbOExOHFx7XyPpbf8wkb8aqGJvWwylEKwd54Gp4alHEoy7X9lZKcrRJZyp3bSFn/NwWjWwhw6sWjVGwBml4xTt8p0joDFR4hXABYzPjNNdmS34a+1xFcKFERAobJkKNc1bd4mk+Dc6AQ7b8gTROFd1nSJB46jvWVFRVIu7H+HxqvOgzBg1cuzd5EtK7mAWJ2VmM7QAFBPI1zPs4xLMuwBYz13rrOSBkRRakxI5KTvvEnjuT6VXyRHuOxyfBNjDJdlwQzG26hFYzcuEsNzBY+ZoHHvZxJS3bIbDWLYLGCFDMQiagR+BdTGacXmxDOe/oEEjcNBLtAiCDpQLttJJ3qJcVfUB3VNLnvLpkqGYQDoH4VJmZ4cd6ss8u3EF8XWZPgYeydLB1I1uYMAGdkUD/AHVBkLl8Lfu3W0C87u7c1tkKIHjpkDxNRYrLsE90IMNaJ0q5aSmzEx3VHeECTyrMVbwt3SzvdRWBZ7SsVQKgZibijZNkPQ7CoQbY6/bS0l90hETuW+bO8aQepAA9STypXgsS+Gwl3E3FX4jsSq6QBudKqdO8TJjpU1nBLduI74l3VS3wUZApDkSuk8HKgSJngKjzDKsTeKI7WTatNqCqWDOFjSjjeCV2kdTWiqI7SjDYIK5ZXxDBYQamDXdgqhj+FfHaKLst8N0w7uHJtsyNp0vCFVIYAwfmEERwO1L8Zirj30vYjD3EtWVLBRFz/Ec6Q3d4geA2ia0yZxiMTexO+hQLNqRGwhnaDw3j3NQsaz3GHQ/0oDMr2lUbzH3H0NHkd5h1B/f7UuxlxNDBt43Hpv8AY+9YnHlFoJB1JMHt4qa3v39qSjME5GsfHCONI8By0e429SHF4iTRGMxE0ugE7863FUYkzEtkKbhAIUiZ5+FNDmKXR31RByCiD70qz7EqqKictyevSfGkaXyedP8Ajx9NsQz05fwWXGZYqoXtQ6k7x86n70gONJOh5cTt1px2czPQzqd5Xn+tH9o7KXLSNaRUdOMbE0aeL08oiePO1Nwl/QN2buBsTbRJWW7y+ArpXaEE/CTq4/Suc/2eYYnGSy/KvXnXUcWyG4gb5p7opGb2OxNc7IW1v4VzjFZ0hebbAMNp5TV/7TlTbIYkd0xHGuJXl4pBEHpx341IKy2yxHtI7ko53AMHlS9NIOtjr5mDvROcZAiYZLyOxJjVNKsrw4vXkRX06tiTwoqr4KJ7+NZwQp7g5UkmnWa5acPce2x1Qsg8opTbURV2ijrGItTett/lYfQ1rcty7/8AxkfWsrK8lCT1/H/ToyOVZwsXD5CmvY/4BuEYiNBBEnkeR8K8rK9K94UhH9xcMywGDSwUsuG+I6tAbV8oNUPO8IUYEfKTsK8rKH4aaW3ZeTsnwgNsjuTI5/al+YtLHwrKynUCY9y+xNpN+VTf3HxrKyss0hjk2EVH1kgdPOukdnm/w1Pgx/8A1FZWVSLC9e9SK9ZWVZCXUDEwduYnw+lQ3cGjBgVHenVG0yACSRBmFA9KysqEPBhbekqwJEEbkyJIaQ3ENKrvx7orVsEjBFYhwjFmLgF3Yg7sfNp9BWVlaIDfAui4CCdBbeLhhVA2CiR0G2nmd6IudaysqmQEd+8DSrHWYJ6SVP2rKyrIUl8MUdlJ+UkenL9K9J8ayspWXY1HohJkwKCzu41kKNjO5HMeteVlEwxTewOWTSFd/FhxCrw4nn60PrAFZWU7HoSQflrhQX2JPjuKOt3Hc7zHM8qyspiIrOKctls/s9wei+7k7aRH3qwM+vMRvsiT6k1lZXNze5nRh7ULe3WYMtxFQ7GZqpYnFG2dSgEnqKysrETUgPF5/cdSjAaekUJh8b8Ng6osisrKIYNs0zg4iWdQCBG1LLd0ARXlZV/BZ//Z"
              alt=""
            />
            <div className="infos">
              <b>Leo Stronda </b> <span>Personal Trainer</span>
            </div>
          </li>
          <li>
            <img
              src="https://quantosanos.com.br/wp-content/uploads/2021/08/renato-cariani-idade-758x573.jpg"
              alt=""
            />
            <div className="infos">
              <b>Renato Cariani </b> <span>Nutricionista</span>
            </div>
          </li>
        </ul>
        <Button text="Conhecer" onClick={() => navigate("/login")} />
      </div>
      <img src={img} alt="" />
    </main>
  );
};
