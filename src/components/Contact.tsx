import React, { useState } from 'react';
import '../assets/styles/Contact.scss';

type ResultState = {
  status: 'success' | 'error';
  message: string;
};

export default function Contact() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; email?: string; message?: string }>({});
  const [result, setResult] = useState<ResultState | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validateForm = () => {
    const nextErrors: { firstName?: string; lastName?: string; email?: string; message?: string } = {};

    if (!firstName.trim()) {
      nextErrors.firstName = 'First name is required.';
    }

    if (!lastName.trim()) {
      nextErrors.lastName = 'Last name is required.';
    }

    if (!email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!message.trim()) {
      nextErrors.message = 'Message is required.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    if (!validateForm()) {
      setResult({ status: 'error', message: 'Please fix the errors and try again.' });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      formData.append('access_key', '000912d8-4732-43f5-af7e-9935ec795a0b');
      formData.append('name', `${firstName.trim()} ${lastName.trim()}`);
      formData.append('first_name', firstName.trim());
      formData.append('last_name', lastName.trim());

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({ status: 'success', message: 'Message sent successfully! Thank you for reaching out.' });
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      } else {
        setResult({
          status: 'error',
          message: data.message || 'There was a problem sending your message. Please try again later.',
        });
      }
    } catch (error) {
      setResult({ status: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  const isSuccess = result?.status === 'success';

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let's Connect</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          {!isSuccess ? (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="name-grid">
                <div className="field-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    className="contact-input"
                    type="text"
                    name="first_name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="First name"
                    disabled={loading}
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  />
                  {errors.firstName && <span id="firstName-error" className="field-error">{errors.firstName}</span>}
                </div>
                <div className="field-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    className="contact-input"
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Last name"
                    disabled={loading}
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  />
                  {errors.lastName && <span id="lastName-error" className="field-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="contact-input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                  disabled={loading}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
              </div>

              <div className="field-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="contact-textarea"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Leave me a message ..."
                  disabled={loading}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
              </div>

              <button className="contact-submit" type="submit" disabled={loading}>
                {loading ? 'Sending message...' : 'Send message'}
              </button>

              {result && result.status === 'error' && (
                <p className="submission-result error">{result.message}</p>
              )}
            </form>
          ) : (
            <div className="submission-result success">{result.message}</div>
          )}
        </div>
      </div>
    </div>
  );
}