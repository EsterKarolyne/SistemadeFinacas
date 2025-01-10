import {Category} from '../types/Category'

export const categories: Category = {
    food: { title: 'Alimentação', color: 'yellow', expense: true },
    rent: { title: 'Aluguel', color: 'blue', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    transport: { title: 'Transporte', color: 'orange',  expense: true },
    health: { title: 'Saúde', color: 'red', expense: true },
    education: { title: 'Educação', color: 'purple', expense: true },
    leisure: { title: 'Lazer', color: 'pink', expense: true },
    utilities: { title: 'Utilidades', color: 'brown', expense: true },
    investments: { title: 'Investimentos', color: 'teal', expense: false },
    donations: { title: 'Doações', color: 'gold', expense: true },
    travel: { title: 'Viagem', color: 'cyan', expense: true }
}