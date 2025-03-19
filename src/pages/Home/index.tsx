import { useEffect, useState } from "react";
import { Button, Container, Content, Response } from "./styles";
import { priceFormatter } from "../../utils/formatter";

interface IOption {
    code: string;
    name: string;
    bid: number;
}

export function Home() {
    const [ showResponse, setShowResponse ] = useState(false);
    const [ money, setMoney ] = useState('');
    const [ options, setOptions ] = useState<IOption[]>([]);

    const [ moneyToShow, setMoneyToShow ] = useState('');
    const [ convertedMoney, setConvertedMoney ] = useState('');

    useEffect(() => {
        fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
        .then(data => {
            setOptions(Object.values(data)); 
        })
    },[])

    function handleConvert() {
        setShowResponse(true);

        const coinSelect = document.getElementById('coin-select') as HTMLSelectElement;
        const selectedCoin = coinSelect.options[coinSelect.selectedIndex];

        console.log(selectedCoin)

        let convertedMoney = '';
        let formatToShow = '';

        switch(selectedCoin.id) {
            case 'USD':
                convertedMoney = (priceFormatter(5.86 * Number(money))).toString();
                formatToShow = `US$1,00 = ${priceFormatter(Number(selectedCoin.value))}`;
                break;
            case 'EUR':
                convertedMoney = (priceFormatter(6.38 * Number(money))).toString();
                formatToShow = `€1,00 = ${priceFormatter(Number(selectedCoin.value))}`;
                break;
            case 'GBP':
                convertedMoney = (priceFormatter(7.27 * Number(money))).toString();
                formatToShow = `£1,00 = ${priceFormatter(Number(selectedCoin.value))}`;
                break;
            default:
                break;
        }

        setMoneyToShow(formatToShow);
        setConvertedMoney(convertedMoney);   
        
        if (!money || !selectedCoin) {
            setShowResponse(false);
        }
    }
    
    return (
        <Container>
            <Content>
                <label>Valor</label>
                <input 
                    type="text" 
                    value={money}
                    maxLength={12}
                    onChange={event => setMoney(event.target.value)}
                />
            </Content>
            <Content>
                <label>Moeda</label>
                <select id="coin-select" >
                    {options ? 
                    options?.map(option => (
                        <option key={option.code} value={option.bid} id={option.code}>
                            {option.name.split('/')[0]}
                        </option>
                    )) : <option>Carregando...</option>}
                </select>  
            </Content>
            <Content>
            <Button onClick={handleConvert}>Converter em reais</Button>
            </Content>
            {showResponse && (
                <Response>
                    <span>{moneyToShow}</span>
                    <b>{convertedMoney}</b>
                </Response>
            )}
        </Container>
    )
}