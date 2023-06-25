export interface BannerContext {
   menuOpen: boolean
   setMenuOpen: (state: boolean) => void
   toggleMenu: () => void
}

export interface CheckoutContext {
   handleNext(): void
   handleBack(): void
   handleSubmit(): void
   article: Article
   address: Address
   actualStep: number
}

export interface Address {
   firstname: string
   lastname: string
   email: string
   street: string
   postalCode: string
   city: string
   country: string
   otherAddress: string
   phoneNumber: string
}

export interface Article {
   name: string
   cover: string
   colors: string[]
   price: string
   apport: string
   categories: string[]
   id?: number
}

export type question = {
   id: number
   question: string
   answer: string
}
